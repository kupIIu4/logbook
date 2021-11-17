import axios from "axios";

export const getArticlesXml = () => {
    return (
        axios.get("https://sweb.ru/export/turbojournal/", {
            "Content-Type": "application/xml; charset=utf-8"
        })
            .then(function (response) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(response.data, 'text/xml');
                const titleXml = doc.getElementsByTagName('turbo:topic');
                const contentXml = doc.getElementsByTagName('turbo:content');
                let result = [];
                for (let i = 0; i < contentXml.length; i++) {
                    let o = document.createElement('div');
                    o.innerHTML = contentXml[i].innerHTML.replace(/<!\[CDATA\[/g, '!CDATA');
                    result.push({
                        id: i,
                        title: titleXml[i].innerHTML,
                        content: o.children[1].innerText
                    });
                }
                return Object.values(result);
            })
    )
}
