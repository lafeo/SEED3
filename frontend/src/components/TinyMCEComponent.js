import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import 'tinymce/tinymce';
import 'tinymce/icons/default';
import 'tinymce/themes/silver';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/table';
import 'tinymce/skins/ui/oxide/skin.min.css';
// import 'tinymce/skins/ui/oxide/content.min.css';
// import 'tinymce/skins/content/default/content.min.css';
export default function TinyMCEComponent(props) {
    function handleEditorChange (content, editor){
        props.callback(content);
    }
        return (
            <Editor
                apiKey='kfhsdb4fggqejw121bg489m91gkoobj8zt18vapz0u5pzc9d'
                initialValue="<p>This is the initial content of the editor</p>"
                init={{
                    plugins: [
                        'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
                        'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
                        'table emoticons template paste help'
                    ],
                    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | ' +
                        'bullist numlist outdent indent | link image | print preview media fullpage | ' +
                        'forecolor backcolor emoticons | help',
                    menu: {
                        favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | spellchecker | emoticons'}
                    },
                    menubar: 'favs file edit view insert format tools table help',

                }}
                onEditorChange={handleEditorChange}
            />
        );

}

