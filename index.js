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

function upload() {
    console.log("Uploading");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isUpload = true;
            if (isUpload) {
                console.log("Video Upload Done");
                resolve();
            } else {
                console.log("Failed to Upload");
                reject();
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
                console.log("Video Publish Done");
                resolve();
            } else {
                console.log("Publish Stopped!");
                reject();
            }
        }, 1500)
    })
}

function notify(){
    console.log("Notification Sent!");
}

upload().then(()=>{
    return publish();
}).then(()=>{
    return notify();
}).catch(()=>{
    console.log("Error Uploading & Publishing!");
})