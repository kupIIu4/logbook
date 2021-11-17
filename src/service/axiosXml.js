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
            let result = [];
            for (let i = 0; i < contentXml.length; i++) {
                let o=document.createElement('div');
                o.innerHTML=contentXml[i].innerHTML.replace(/<!\[CDATA\[/g,'!CDATA');
                result.push({
                    id: i,
                    title: titleXml[i].innerHTML,
                    content: o.children[1].innerText
                });
                // полный пример...
               //  const data = `<MediaFile delivery="progressive" width="640" height="360" type="video/mp4" bitrate="397" scalable="false" maintainAspectRatio="false">https://example1.com/file.mp4</MediaFile><MediaFile delivery="progressive" width="1024" height="576" type="video/mp4" bitrate="1280" scalable="false" maintainAspectRatio="false">https://example2.com/file.mp4</MediaFile><MediaFile delivery="progressive" width="1024" height="576" type="video/mp4" bitrate="1280" scalable="false" maintainAspectRatio="false"><!CDATA some data example></MediaFile>`;
               //  debugger
               //  let data = result[0].content;
               //  let o=document.createElement('div');
               //  o.innerHTML=data.replace(/<!\[CDATA\[/g,'!CDATA');
               //  let arr=Array.from(o.querySelectorAll('p'))
               //      .map(el=>el.innerHTML.replace('!CDATA','<!CDATA')
               //          .replace('&gt;','>'))
               //
               //  console.log(arr.join('\n'));
            }
            return Object.values(result);
    })
)

}
