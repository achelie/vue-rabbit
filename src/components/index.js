import ImgView from "@/components/ImageView/index.vue"
import XtxSku from "@/components/XtxSku/index.vue"
export const componentPlugin = {
    install(app){
        app.component('ImgView',ImgView)
        app.component('XtxSku',XtxSku)
    }
}