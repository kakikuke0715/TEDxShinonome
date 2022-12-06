const infoData = [
    {
        name:'TALKS',
        url:''
    },
    {
        name:'PARTNERS',
        url:''
    },
    {
        name:'CONTACT',
        url:''
    },
    {
        name:'プライバシーポリシー',
        url:''
    },
    {
        name:'行動規範',
        url:''
    }
]

function getPageInfo(){
    var titleName = document.getElementById('general').title;
    const pageData = infoData.filter(word => word.name === titleName)
    window.location.href = '../general.html';
    document.getElementById('general-title').innerHTML =  pageData.name;
    document.getElementById('general-url').innerHTML =  
    <iframe id="inlineFrameExample"
        title="Inline Frame Example"
        width="300"
        height="200"
        src={pageData.url}>
    </iframe>
}

