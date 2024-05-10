import vue from '@vitejs/plugin-vue2'
import dynamicImport from 'vite-plugin-dynamic-import'
import purgeCssPlugin from '@mojojoejo/vite-plugin-purgecss'
import './src/static/contacts.mjs'

export default {
    plugins: [
        vue(),
        // dynamicImport( // 4 years on i still cant figure this out god please
        //     {
        //         onFiles(files, id) {
        //             if (id.includes('/node_modules/simple-icons')) {
        //                 let usedIcons = [];
        //                 for (const icon in contacts) {
        //                     usedIcons.push(icon)
        //                 }

        //                 files_ = files.filter(val => usedIcons.includes(val))
        //                 return files_
        //             }
        //         }
        //     }
        // ),
        purgeCssPlugin()
    ],
}