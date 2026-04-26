import { ref } from "vue";
import { useRouter } from "vue-router";
import { a as useRuntimeConfig } from "../server.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/hookable/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/unctx/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/h3/dist/index.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/defu/dist/defu.mjs";
import "C:/Users/Ali Raza/Desktop/AI_Simulator/risk-analyzer/frontend/node_modules/ufo/dist/index.mjs";
import "vue/server-renderer";
const analyze = {
  setup() {
    const router = useRouter();
    const activeTab = ref("text");
    const isAnalyzing = ref(false);
    const dragOver = ref(false);
    const selectedFile = ref(null);
    ref(null);
    const form = ref({
      title: "",
      text: ""
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
        if (activeTab.value === "text") {
          response = await fetch(`${apiUrl}/analyze/text`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
              title: form.value.title || "Untitled Assessment",
              text: form.value.text
            })
          });
        } else {
          const formData = new FormData();
          formData.append("document", selectedFile.value);
          formData.append("title", form.value.title || "Untitled File Report");
          response = await fetch(`${apiUrl}/analyze`, {
            method: "POST",
            credentials: "include",
            body: formData
          });
        }
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Analysis failed");
        }
        const data = await response.json();
        const reportId = data.report?._id || data._id;
        console.log("Analysis successful, Report ID:", reportId);
        router.push("/dashboard");
      } catch (error) {
        console.error("Analysis error:", error);
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
export {
  analyze as default
};
//# sourceMappingURL=analyze-CoKAg9IJ.js.map
