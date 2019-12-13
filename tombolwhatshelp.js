(function () {
        var options = {
            whatsapp: "+628128566750", // WhatsApp number
            email: "adimasmultiwisata@gmail.com", // Email
            sms: "+628128566750", // Sms phone number
            call: "+628128566750", // Call phone number
            company_logo_url: "//static.whatshelp.io/img/flag.png", // URL of company logo (png, jpg, gif)
            greeting_message: "Halo kawan.. ada yang bisa kami bantu?", // Text of greeting message
            call_to_action: "Hubungi Kami", // Call to action
            button_color: "#1BA0E2", // Color of button
            position: "right", // Position may be 'right' or 'left'
            order: "whatsapp,call,sms,email" // Order of buttons
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();