// Method One
// function func(params) {
//     return new Promise((resolve,reject)=>{
//         let on = true
//         if (on) {
//             resolve()
//         } else {
//             reject()
//         }
//     })
// }

// func().then(()=>{
//     console.log("Resolved");
// }).catch(()=>{
//     console.log("Not Resolved!");
// })

// -----------------------------------------------//
//Method Two!

const obj = {
    title:"Notification sent to customer!"
}

function upload() {
    console.log("Uploading");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isUpload = true;
            if (isUpload) {
                resolve("Video Upload Done");
            } else {
                reject("Failed to Upload");
            }
        }, 1500);
    })
}

function publish() {
    console.log("Publishing");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isPublish = true;
            if (isPublish) {
                resolve("Video Publish Done");
            } else {
                reject("Publish Stopped!");
            }
        }, 1500)
    })
}

function notify(obj) {
    console.log(obj.title);
}

upload().then((isUpload) => {
    console.log(isUpload);
    return publish();
}).then((isPublish) => {
    console.log(isPublish);
    return notify(obj);
}).catch((error) => {
    console.log(error);
})