# Terminal

**Demo: https://panr.github.io/hugo-theme-terminal-demo/**

**Create your own color scheme: https://panr.github.io/terminal-css/**

![Terminal](https://github.com/panr/hugo-theme-terminal/blob/master/images/terminal-theme.png?raw=true)

---

⚠️ The theme needs at least Hugo **Extended** v0.90.x.

---

- [Features](#features)
- [Built-in shortcodes](#built-in-shortcodes)
- [Code highlighting](#code-highlighting)
- [How to start](#how-to-start)
- [How to run your site](#how-to-run-your-site)
- [How to configure](#how-to-configure)
- [Post archetype](#post-archetype)
- [Add-ons](#add-ons)
- [How to edit the theme](#how-to-edit)
- [Found a bug?](#bug)
- [New cool idea or feature](#feature)
- [Terminal theme user?](#terminal-theme-user)
- [License](#license)

## Features

- fully customizable color schemes generated by [**Terminal.css**](https://panr.github.io/terminal-css/).
- [**Fira Code**](https://github.com/tonsky/FiraCode) as default monospaced font. It's gorgeous!
- **really nice duotone**, custom syntax highlighting based on [**PrismJS**](https://prismjs.com)
- fully responsive
- fully based on Hugo ecosystem (Pipes and Modules)
- automatic structured data generation for SEO.
- auto hyperlinking of raw links.
- many overridibles / customisations.

#### Built-in shortcodes

- **`image`** (props required: **`src`**; props optional: **`alt`**, **`position`** (**left** is default | center | right), **`style`**)
  - e.g.
  ```go
  {{< image src="/img/hello.png" alt="Hello Friend" position="center" style="border-radius: 8px;" >}}
  ```
- **`figure`** (same as `image`, plus few optional props: **`caption`**, **`captionPosition`** (left | **center** is default | right), **`captionStyle`**)
  - e.g.
  ```go
  {{< figure src="/img/hello.png" alt="Hello Friend" position="center" style="border-radius: 8px;" caption="Hello Friend!" captionPosition="right" captionStyle="color: red;" >}}
  ```
- **`code`** (props required: **`language`**; props optional: **`title`**, **`id`**, **`expand`** (default "△"), **`collapse`** (default "▽"), **`isCollapsed`**)
  - e.g.
  ```go
  {{< code language="css" title="Really cool snippet" id="1" expand="Show" collapse="Hide" isCollapsed="true" >}}
  pre {
    background: #1a1a1d;
    padding: 20px;
    border-radius: 8px;
    font-size: 1rem;
    overflow: auto;

    @media (--phone) {
      white-space: pre-wrap;
      word-wrap: break-word;
    }

    code {
      background: none !important;
      color: #ccc;
      padding: 0;
      font-size: inherit;
    }
  }
  {{< /code >}}
  ```

#### Per-page variables

Almost all of the variables (relevant to the post) you see in the config can be
overriden in the YAML front matter of your post.

Some per-page variables which allow additional functionality are as follows:

- `hideComments`: (bool) Hide / Disable comments on a page.
- `hideDate`: (bool) Hide the date from a page. Useful for a non-post page.
- `latex`: (bool) Enable inline LaTeX support using mathjax.

#### Code highlighting

A custom syntax highlighting based on PrismJS. All you need to do is to wrap you code like this:

````
```html
  // your code here
```
````

**Supported languages**: actionscript, apacheconf, applescript, bash, c, clike, cmake, coffeescript, cpp, csharp, csp, css, css-extras, diff, django, docker, elixir, elm, erlang, flow, fsharp, git, go, graphql, haml, handlebars, haskell, http, java, javascript, json, jsx, kotlin, latex, less, llvm, makefile, markdown, markup, markup-templating, nasm, objectivec, ocaml, perl, php, php-extras, powershell, processing, pug, python, r, reason, ruby, rust, sass, scala, scheme, scss, sql, stylus, swift, textile, toml, tsx, twig, typescript, vim, visual-basic, wasm, yaml.

## How to start

You can download the theme manually by going to [https://github.com/panr/hugo-theme-terminal.git](https://github.com/panr/hugo-theme-terminal.git) and pasting it to `themes/terminal` in your root directory.

You can also choose **one of the 3 possibilities** to install the theme:

1. as Hugo Module
2. as a standalone local directory
3. as a git submodule

⚠️ The theme needs at least Hugo **Extended** v0.90.x.

### Install theme as Hugo Module

```bash
# If this is the first time you're using Hugo Modules
# in your project. You have to initiate your own module before
# you fetch the theme module.
#
# hugo mod init [your website/module name]
hugo mod get github.com/panr/hugo-theme-terminal/v4
```

and in your config file add:

```toml
[module]
  # this is needed when you fetch the theme as a submodule to your repo.
  # replacements = "github.com/panr/hugo-theme-terminal/4 -> themes/terminal"
[[module.imports]]
  path = 'github.com/panr/hugo-theme-terminal/v4'
```

Keep in mind that the theme by default won't show up in the `themes` directory. This means that you are using the theme as it was on the repository at the moment you fetched it. Your local `go.sum` file keeps all the references. Read more about Hugo Modules in the [official documentation](https://gohugo.io/hugo-modules/).

### Install theme locally

```bash
git clone https://github.com/panr/hugo-theme-terminal.git themes/terminal
```

This will clone the repository directly to the `themes/terminal` directory.

### Install theme as a submodule

```bash
git submodule add -f https://github.com/panr/hugo-theme-terminal.git themes/terminal
```

This will install the repository as a sumbodule in the `themes/terminal` directory.

⚠️ If you encounter any issues with:

```bash
Error: module "terminal" not found; either add it as a Hugo Module or store it in "[...your custom path]/themes".: module does not exist
```

then please try to remove `theme = "terminal"` from your config file.

## How to run your site

```bash
hugo server -t terminal
```

and go to `localhost:1313` in your browser. From now on all the changes you make will go live, so you don't need to refresh your browser every single time.

## How to configure

The theme doesn't require any advanced configuration. Just copy:

```toml
baseurl = "/"
languageCode = "en-us"
# Add it only if you keep the theme in the `themes` directory.
# Remove it if you use the theme as a remote Hugo Module.
theme = "terminal"
pagination.pagerSize = 5

[params]
  # Start year for Copyright.
  copyrightStartYear = 2025

  # dir name of your main content (default is `content/posts`).
  # the list of set content will show up on your index page (baseurl).
  contentTypeName = "posts"

  # if you set this to 0, only submenu trigger will be visible
  showMenuItems = 2

  # show selector to switch language
  showLanguageSelector = false

  # set theme to full screen width
  fullWidthTheme = false

  # center theme with default width
  centerTheme = false

  # if your resource directory contains an image called `cover.(jpg|png|webp)`,
  # then the file will be used as a cover automatically.
  # With this option you don't have to put the `cover` param in a front-matter.
  autoCover = true

  # set post to show the last updated
  # If you use git, you can set `enableGitInfo` to `true` and then post will automatically get the last updated
  showLastUpdated = false

  # Provide a string as a prefix for the creation and last update date.
  # By default, it looks like this (no prefix creation date):
  # 2020-xx-xx :: Updated 2020-xx-xx :: Author
  # createdDatePrefix = ""
  # updatedDatePrefix = "Updated"

  # whether to show a page's estimated reading time
  # readingTime = false # default

  # whether to show a table of contents
  # can be overridden in a page's front-matter
  # Toc = false # default

  # set title for the table of contents
  # can be overridden in a page's front-matter
  # TocTitle = "Table of Contents" # default

  # Set date/time format for posts
  # This will impact the date/time displayed on
  # index.html, the posts list page, and on posts themselves
  # This value can also be configured per-post on front matter
  # If you have any issues with the timezone rendering differently
  # than you expected, please ensure your timezone is correctly set
  # on your server.
  # This value can be customized according to Hugo documentation:
  # https://gohugo.io/functions/time/format/
  # Default value (no changes needed):
  # dateFormat = "2006-01-02"
  # Example format, with date, time, and timezone abbreviation:
  # dateFormat = "2006-01-02 3:04:06 PM MST"

  # Whether the site is nsfw or not. Needed for structered data generation.
  nsfw = false


[params.twitter]
  # set Twitter handles for Twitter cards
  # see https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started#card-and-content-attribution
  # do not include @
  creator = ""
  site = ""

[languages]
  [languages.en]
    languageName = "English"
    title = "Terminal"

    [languages.en.params]
      subtitle = "A simple, retro theme for Hugo"
      owner = ""
      keywords = ""
      copyright = ""
      menuMore = "Show more"
      readMore = "Read more"
      readOtherPosts = "Read other posts"
      newerPosts = "Newer posts"
      olderPosts = "Older posts"
      missingContentMessage = "Page not found..."
      missingBackButtonLabel = "Back to home page"
      minuteReadingTime = "min read"
      words = "words"

      [languages.en.params.logo]
        logoText = "Terminal"
        logoHomeLink = "/"

      [languages.en.menu]
        [[languages.en.menu.main]]
          identifier = "about"
          name = "About"
          url = "/about"
        [[languages.en.menu.main]]
          identifier = "showcase"
          name = "Showcase"
          url = "/showcase"

[module]
  # In case you would like to make changes to the theme and keep it locally in you repository,
  # uncomment the line below (and correct the local path if necessary).
  # --
  # replacements = "github.com/panr/hugo-theme-terminal/v4 -> themes/terminal"
[[module.imports]]
  path = 'github.com/panr/hugo-theme-terminal/v4'
```

**NOTE:** Please keep in mind that currently `main menu` doesn't support nesting.

## Post archetype

See the default `post` file params supported by the theme — https://github.com/panr/hugo-theme-terminal/blob/master/archetypes/posts.md

## Add-ons

- **Comments** — for adding comments to your blog posts please take a look at [`layouts/partials/comments.html`](https://github.com/panr/hugo-theme-terminal/blob/master/layouts/partials/comments.html).
- **Extended Head** — please take a look at [`layouts/partials/extended_head.html`](https://github.com/panr/hugo-theme-terminal/blob/master/layouts/partials/extended_head.html).
- **Copyright footer area** — please take a look at [`layouts/partials/footer_copyright.html`](https://github.com/panr/hugo-theme-terminal/blob/master/layouts/partials/extended_head.html).
- **Extended Footer** — please take a look at [`layouts/partials/extended_footer.html`](https://github.com/panr/hugo-theme-terminal/blob/master/layouts/partials/extended_footer.html)

## How to edit the theme <a id="how-to-edit" />

If you are using as a remote Hugo Module (you don't have the theme files in the `theme/terminal`) and you have to override only some of the styles, you can do this easily by adding `static/style.css` in your root directory and point things you want to change.

If you have the theme files in the theme directory, then you can directly edit anything in the theme, you just have to go to `themes/terminal` and modify the files. No compilation step needed.

## Found a bug? <a id="bug" />

If you spot any bugs, please use [Issue Tracker](https://github.com/panr/hugo-theme-terminal/issues) or create a new [Pull Request](https://github.com/panr/hugo-theme-terminal/pulls) to fix the issue.

## New cool idea or feature? <a id="feature" />

The theme is in constant development since 2019 and has got many cool features that helped many of you and made the theme better. But there were also many features that I wasn't sure about because I want to keep the theme as simple as possible.

So, let's say you have an idea of how to extend the theme. That's cool and you're welcome to do that, just follow these steps:

- fork the theme
- implement the feature
- write an instruction how to use the feature
- give a working example of the implementation for other users
- add info about your work to `COMMUNITY-FEATURES.md`
- make a PR with edited `COMMUNITY-FEATURES.md`

This will help keeping the theme close to its roots, and also allow anyone who wishes to improve it and match their needs, to do whatever they want.

Sounds OK? Cool, let's rock! 🤘

## Terminal theme user?

I'd be happy to know more about you and what you are doing. If you want to share it, please make a contribution and [add your site to the list](https://github.com/panr/hugo-theme-terminal/blob/master/USERS.md)! 🤗


## License

Copyright © 2019-2025 Radosław Kozieł ([@panr](https://twitter.com/panr))

The theme is released under the MIT License. Check the [original theme license](https://github.com/panr/hugo-theme-terminal/blob/master/LICENSE.md) for additional licensing information.
