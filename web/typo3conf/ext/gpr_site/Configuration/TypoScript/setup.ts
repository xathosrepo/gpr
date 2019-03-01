<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/setup.txt">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:gpr_site/Configuration/TypoScript/Setup" extensions="ts">

page = PAGE
page {
    typeNum = 0


    10 = FLUIDTEMPLATE
    10 {
        templateName = TEXT
        templateName.stdWrap.cObject = CASE
        templateName.stdWrap.cObject {
            key.data = pagelayout

            pagets__site_package_default = TEXT
            pagets__site_package_default.value = Default

            default = TEXT
            default.value = Default
        }
        templateRootPaths {
            0 = EXT:gpr_site/Resources/Private/Templates/Page/
            1 = {$page.fluidtemplate.templateRootPath}
        }
        partialRootPaths {
            0 = EXT:gpr_site/Resources/Private/Partials/Page/
            1 = {$page.fluidtemplate.partialRootPath}
        }
        layoutRootPaths {
            0 = EXT:gpr_site/Resources/Private/Layouts/Page/
            1 = {$page.fluidtemplate.layoutRootPath}
        }


        variables {
            contentMain < styles.content.get
            contentMain.select.where = {#colPos}=0

            contentBottomLeft < styles.content.get
            contentBottomLeft.select.where = {#colPos}=1

            contentBottomCenter < styles.content.get
            contentBottomCenter.select.where = {#colPos}=2

            contentBottomRight < styles.content.get
            contentBottomRight.select.where = {#colPos}=3
        }
    }

    // Part 2: CSS file inclusion
    includeCSS {
        0 = https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css
        1 = EXT:gpr_site/Resources/Public/res/main.css
    }

    // Part 3: JavaScript file inclusion
    includeJSFooter {
        0 = https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
        1 = https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js
        2 = https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js
        3 = EXT:gpr_site/Resources/Public/res/main.js

    }
}

// Part 4: global site configuration
config {
    absRefPrefix = auto
    cache_period = 86400
    debug = 0
    disablePrefixComment = 1
    doctype = html5
    extTarget =
    index_enable = 1
    index_externals = 1
    index_metatags = 1
    inlineStyle2TempFile = 1
    intTarget =
    linkVars = L
    metaCharset = utf-8
    no_cache = 0
    pageTitleFirst = 1
    prefixLocalAnchors = all
    removeDefaultJS = 0
    renderCharset = utf-8
    sendCacheHeaders = 1
    uniqueLinkVars = 1

    // Disable image upscaling
    noScaleUp = 1

    // Compression and concatenation of CSS and JS Files
    compressCss = 0
    compressJs = 0
    concatenateCss = 0
    concatenateJs = 0
}