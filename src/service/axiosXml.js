import axios from "axios";

export const getArticlesXml = () => {
return (
    axios.get("https://sweb.ru/export/turbojournal/", {
            "Content-Type": "application/xml; charset=utf-8"
        })
        .then(function(response) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(response.data, 'text/xml');
            const titleXml = doc.getElementsByTagName('turbo:topic');
            const contentXml = doc.getElementsByTagName('turbo:content');
            //const werw = contentXml[0].innerHTML.replace("<![CDATA[", "").replace("]]>", "");
            let result = [];
            for (let i = 0; i < titleXml.length; i++) {
                result.push({
                    title: titleXml[i].textContent,
                    content: contentXml[0].innerHTML.replace("<![CDATA[", "").replace("]]>", "")
                });
            }
            console.log(result);
            return result;
    })
)

}
