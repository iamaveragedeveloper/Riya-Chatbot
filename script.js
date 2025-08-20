const socialIconButtons = document.getElementsByClassName("social-icon");

function postToSocialMedia(classList) {
    const content = `Check out my cool generative AI Project 😎 \n${window.location.href.toString()}`;
    if (classList.contains("twitter")) {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(content)}`;
        window.open(url);
    } else if (classList.contains("linkedin")) {
        const url = `https://www.linkedin.com/share?text=${encodeURIComponent(content)}`;
        window.open(url);
    } else if (classList.contains("whatsapp")) {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(content)}`);
    }
}

const addEventListenersToSocialIconButton = () => {
    for (let i = 0; i < socialIconButtons.length; i++) {
        socialIconButtons[i].addEventListener("click", () =>
            postToSocialMedia(socialIconButtons[i].classList)
        );
    }
};

addEventListenersToSocialIconButton();

const skillIcon = document.getElementsByClassName("tooltip");

const addEventListenersToSkillIcon = () => {
    for (let i = 0; i < skillIcon.length; i++) {
        skillIcon[i].addEventListener("click", (e) => {
            console.log(e.target)
            updateDescription(e.target.id);
        });
    }
};

addEventListenersToSkillIcon();

const descriptionDiv = document.getElementsByClassName("about-section");
const updateDescription = (id) => {
    let description = "";

    switch (id) {
        case "googleColab":
            description = "Google Colab: A cloud-based notebook environment for writing and executing Python code, perfect for AI and Machine Learning development.";
            break;
        case "gradio":
            description = "Gradio: An open-source Python library used to build and share interactive web apps for machine learning models quickly.";
            break;
        case "openAi":
            description = "OpenAI: An AI research and deployment company. We used their API models for initial development before switching to open-source alternatives.";
            break;
        case "playHt":
            description = "PlayHT: An AI-powered platform for generating realistic text-to-speech audio and cloning voices, which can be integrated into applications.";
            break;
        case "huggingFace":
            description = "Hugging Face: A platform that provides tools for building, training, and deploying state-of-the-art machine learning models. We use it for hosting our free model and deploying the final app.";
            break;
        case "langChain":
            description = "LangChain: A framework for developing applications powered by language models. It helps manage prompts, memory, and the overall logic of AI applications.";
            break;
        default:
            description = "Click an icon to learn more about the technology used in this project.";
    }
    for (let i = 0; i < descriptionDiv.length; i++) {
        descriptionDiv[i].textContent = description;
    }
};

updateDescription("default");
