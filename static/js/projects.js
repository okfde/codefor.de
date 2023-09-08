const loadAdditionalProjects = async (url, externalTemplate) => {
    const response = await fetch(url)
    const payload = await response.json()
    const projectListNode = document.querySelector("#projects-container");
    const template = externalTemplate ?? document.querySelector( "#projects-container > div");
    const makeTagNodes = (categories) => {
        const map = {
            "society": {
                img: "/img/taxonomie-icon/gesellschaft.svg",
                title: "Gesellschaft"
            },
            "environment": {
                img: "/img/taxonomie-icon/umwelt.svg",
                title: "Umwelt"
            },
            "politics": {
                img: "/img/taxonomie-icon/politik.svg",
                title: "Politik"
            },
            "mobility": {
                img: "/img/taxonomie-icon/mobilitaet.svg",
                title: "Mobilität"
            }
        };
        return categories.map(category => {
            const node = document.createElement("img");
            node.className = "img-fluid taxonomie-icon";
            node.innerText = map[category].title;
            node.src = map[category].img;
            return node;
        });
    };

    payload.projects
        .filter(p => p.lang === "de")
        .forEach(project => {
        const copy = template.cloneNode(true);
        copy.querySelector(".title").innerText = project.title;
        copy.querySelector(".project-image").src = project.img;
        copy.querySelector(".description").innerText = project.teaser;
        copy.querySelector(".lab-link").href = project.link;
        copy.querySelector(".project-link").href = project.link;
        copy.querySelector(".lab-link").innerText = project.lab;
        copy.querySelector(".status").innerText = project.status;
        copy.querySelector(".tags").innerHTML = "";
        copy.dataset ??= {};
        copy.dataset.name = project.title;
        copy.dataset.date = project.year;
        makeTagNodes(project.categories).forEach(node => {
            copy.querySelector(".tags").appendChild(node);
        })
        projectListNode.appendChild(copy);
    })
};
