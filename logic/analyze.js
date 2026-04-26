import { ref } from 'vue';
import { useRouter, useRuntimeConfig } from '#imports';

export default {
  setup() {
    const router = useRouter();
    const activeTab = ref('text');
    const isAnalyzing = ref(false);
    const dragOver = ref(false);
    const selectedFile = ref(null);
    const result = ref(null);

    const form = ref({
      title: '',
      text: '',
    });

    const handleFileSelect = (event) => {
      selectedFile.value = event.target.files[0];
    };

    const handleDrop = (event) => {
      dragOver.value = false;
      if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        selectedFile.value = event.dataTransfer.files[0];
      }
    };

    const submitAnalysis = async () => {
        isAnalyzing.value = true;
        const config = useRuntimeConfig();
        try {
            let response;
            const apiUrl = config.public.apiBase;
            
            if (activeTab.value === 'text') {
                response = await fetch(`${apiUrl}/analyze/text`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify({
                        title: form.value.title || 'Untitled Assessment',
                        text: form.value.text,
                    })
                });
            } else {
                 const formData = new FormData();
                 formData.append('document', selectedFile.value);
                 formData.append('title', form.value.title || 'Untitled File Report');
                 response = await fetch(`${apiUrl}/analyze`, {
                    method: 'POST',
                    credentials: 'include',
                    body: formData
                 });
            }
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Analysis failed');
            }
            
            const data = await response.json();
            const reportId = data.report?._id || data._id;
            console.log('Analysis successful, Report ID:', reportId);
            
            if (reportId) {
              router.push(`/report/${reportId}`);
            } else {
              router.push('/dashboard');
            }
            
        } catch (error) {
            console.error('Analysis error:', error);
            alert(`Analysis Failed: ${error.message}`);
        } finally {
            isAnalyzing.value = false;
        }
    };

    return {
      activeTab,
      isAnalyzing,
      dragOver,
      selectedFile,
      form,
      handleFileSelect,
      handleDrop,
      submitAnalysis
    };
  }
};
