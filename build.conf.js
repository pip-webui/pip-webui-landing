module.exports = {
    module: {
        name: 'pipLanding',
        styles: 'landing',
        export: 'pip.landing',
        standalone: 'pip.landing'
    },
    build: {
        js: false,
        ts: false,
        tsd: true,
        bindle: true,
        html: true,
        less: true,
        lib: true,
        images: true,
        dist: false
    },
    file: {
        lib: [
            '../pip-webui-lib/dist/**/*',
            '../pip-webui-css/dist/**/*',
            '../pip-webui-services/dist/**/*',
            '../pip-webui-landing/dist/**/*',
             '../pip-webui-nav/dist/**/*',
             '../pip-webui-layouts/dist/**/*',
             '../pip-webui-themes/dist/**/*',             
        ]
    },
    samples: {
        port: 8160
    },
    api: {
        port: 8161
    }
};
