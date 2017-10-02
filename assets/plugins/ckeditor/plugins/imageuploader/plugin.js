  CKEDITOR.plugins.add('imageuploader',
    {
        init: function (editor) {
            var pluginName = 'imageuploader';
            editor.ui.addButton('imageuploader',
                {
                    label: 'imageuploader',
                    command: 'OpenWindow1',
                    icon: CKEDITOR.plugins.getPath('imageuploader') + 'icon.png'
                });
            var cmd = editor.addCommand('OpenWindow1', { exec: showMyDialog1 });
        }
    });
    function showMyDialog1(e) {
       e.insertHtml(' imageuploader ');
    }