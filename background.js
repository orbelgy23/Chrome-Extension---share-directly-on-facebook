
function ShareImageClick(info, tab){
    console.log("You clicked on image: ", info, tab)
    var website_type = info.linkUrl.split("/")[2]
    console.log(website_type)
    if (website_type === "www.google.com" || website_type === "www.google.co.il"){              //google website
        var new_link = info.linkUrl.split("=")[1].split("&")[0]
        console.log("you are at google website")
        chrome.windows.create({
            "url":"https://www.facebook.com/sharer.php?u=" + new_link + "&display=popup",
            "type": "popup"
        })

    }
    else if (website_type === "www.bing.com"){              //bing website
        var new_link = info.linkUrl.split("=")[5].split("&")[0]
        console.log("you are at bing website")
        chrome.windows.create({
            "url":"https://www.facebook.com/sharer.php?u=" + new_link + "&display=popup",
            "type": "popup"
        })

    }
    else{     //not google and bing websites
        console.log("you are at unknown website")
        chrome.windows.create({

            "url":"https://www.facebook.com/sharer.php?u=" + info.linkUrl + "&display=popup",
            "type": "popup"
        })

    }
    
    

}

function ShareQuoteClick(info, tab){
    console.log("You selected a paragraph: ", info, tab)
    chrome.windows.create({
        "url":"https://www.facebook.com/sharer.php?u=" + info.pageUrl + "&display=popup&quote=" + info.selectionText,
        "type": "popup"
    })
}


chrome.contextMenus.create({
    "title": "Share image on facebook",
    "contexts": ["image"],
    "onclick": ShareImageClick
})


chrome.contextMenus.create({
    "title": "Share quote on facebook",
    "contexts": ["selection"],
    "onclick": ShareQuoteClick
})





// chrome.contextMenus.create({
//     "title": "share",
//     "contexts": ["page"],
//     "onclick": GenericClick
// })