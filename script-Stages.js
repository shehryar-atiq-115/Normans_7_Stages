const stages = [
    {
        title: "Goal",
        desc: "The user wants to turn on the light."
    },
    {
        title: "Intention",
        desc: "The user decides to press the light switch."
    },
    {
        title: "Action",
        desc: "The user moves their hand toward the switch."
    },
    {
        title: "Execution",
        desc: "The user presses the switch."
    },
    {
        title: "Perception",
        desc: "The user sees that the light has turned on."
    },
    {
        title: "Interpretation",
        desc: "The user understands that the action was successful."
    },
    {
        title: "Evaluation",
        desc: "The user confirms the goal has been achieved."
    }
];

const startBtn = document.getElementById("startBtn");
const title = document.getElementById("stageTitle");
const desc = document.getElementById("stageDesc");

startBtn.addEventListener("click", () => {
    let i = 0;

    title.textContent = "";
    desc.textContent = "";

    const interval = setInterval(() => {
        if (i < stages.length) {
            title.textContent = stages[i].title;
            desc.textContent = stages[i].desc;
            i++;
        } else {
            clearInterval(interval);
        }
    }, 1500); // delay between stages
});