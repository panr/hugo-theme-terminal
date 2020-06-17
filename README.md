# Terminal

![Terminal](https://github.com/panr/hugo-theme-terminal/blob/master/images/screenshot.png?raw=true)

### DEMO - https://hugo-terminal.now.sh/

<a href="https://www.buymeacoffee.com/panr" target="_blank"><img src="https://res.cloudinary.com/panr/image/upload/v1579374705/buymeacoffee_y6yvov.svg" alt="Buy Me A Coffee" ></a>

---

- [Features](#features)
- [Built-in shortcodes](#built-in-shortcodes)
- [Code highlighting](#code-highlighting)
- [How to start](#how-to-start)
- [How to configure](#how-to-configure)
- [Post archetype](#post-archetype)
- [Add-ons](#add-ons)
- [How to run your site](#how-to-run-your-site)
- [How to edit the theme](#how-to-edit-the-theme)
- [How to contribute](#how-to-contribute)
- [Terminal theme user?](#terminal-theme-user)
- [Sponsoring](#sponsoring)
- [Licence](#licence)

## Features

- **5 duetone themes**, depending on your preferences (orange is default, red, blue, green, pink)
- [**Fira Code**](https://github.com/tonsky/FiraCode) as default monospaced font. It's gorgeous!
- **really nice duotone**, custom syntax highlighting based on [**PrismJS**](https://prismjs.com)
- fully responsive

#### Built-in shortcodes

- **`image`** (prop required: **`src`**; props optional: **`alt`**, **`position`** (**left** is default | center | right), **`style`**)
  - eg: `{{< image src="/img/hello.png" alt="Hello Friend" position="center" style="border-radius: 8px;" >}}`
- **`figure`** (same as `image`, plus few optional props: **`caption`**, **`captionPosition`** (left | **center** is default | right), **`captionStyle`**)
  - eg: `{{< figure src="/img/hello.png" alt="Hello Friend" position="center" style="border-radius: 8px;" caption="Hello Friend!" captionPosition="right" captionStyle="color: red;" >}}`
- **`code`** (prop required: **`language`**; props optional: **`title`**, **`id`**, **`expand`** (default "△"), **`collapse`** (default "▽"), **`isCollapsed`**)
  - eg:
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

#### Code highlighting

A custom syntax highlighting based on PrismJS. All you need to do is to wrap you code like this:

````
```html
  // your code here
```
````

**Supported languages**: bash/shell, css, clike, javascript, apacheconf, actionscript, applescript, c, csharp, cpp, coffeescript, ruby, csp, css-extras, diff, django, docker, elixir, elm, markup-templating, erlang, fsharp, flow, git, go, graphql, less, handlebars, haskell, http, java, json, kotlin, latex, markdown, makefile, objectivec, ocaml, perl, php, php-extras, r, sql, processing, scss, python, jsx, typescript, toml, reason, textile, rust, sass, stylus, scheme, pug, swift, yaml, haml, twig, tsx, vim, visual-basic, wasm.

## How to start

You can download the theme manually by going to [https://github.com/panr/hugo-theme-terminal.git](https://github.com/panr/hugo-theme-terminal.git) and pasting it to `themes/terminal` in your root directory.

You can also clone it directly to your Hugo folder:

```
$ git clone https://github.com/panr/hugo-theme-terminal.git themes/terminal
```

If you don't want to make any radical changes, it's the best option, because you can get new updates when they are available. You can also include it as a git submodule:

```
$ git submodule add https://github.com/panr/hugo-theme-terminal.git themes/terminal
```

## How to configure

The theme doesn't require any advanced configuration. Just copy:

```toml
baseurl = "/"
languageCode = "en-us"
theme = "terminal"
paginate = 5

[params]
  # dir name of your main content (default is `content/posts`).
  # the list of set content will show up on your index page (baseurl).
  contentTypeName = "posts"

  # ["orange", "blue", "red", "green", "pink"]
  themeColor = "orange"

  # if you set this to 0, only submenu trigger will be visible
  showMenuItems = 2

  # show selector to switch language
  showLanguageSelector = false

  # set theme to full screen width
  fullWidthTheme = false

  # center theme with default width
  centerTheme = false

  # set a custom favicon (default is a `themeColor` square)
  # favicon = "favicon.ico"

  # set post to show the last updated
  # If you use git, you can set `enableGitInfo` to `true` and then post will automatically get the last updated
  showLastUpdated = false
  # Provide a string as a prefix for the last update date. By default, it looks like this: 2020-xx-xx [Updated: 2020-xx-xx] :: Author
  # updatedDatePrefix = "Updated"

  # set all headings to their default size (depending on browser settings)
  # it's set to `true` by default
  # oneHeadingSize = false

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
    subtitle = "A simple, retro theme for Hugo"
    owner = ""
    keywords = ""
    copyright = ""
    menuMore = "Show more"
    readMore = "Read more"
    readOtherPosts = "Read other posts"
    missingContentMessage = "Page not found..."
    missingBackButtonLabel = "Back to home page"

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
```

to `config.toml` file in your Hugo root directory and change params fields. In case you need, here's [a YAML version](https://gist.github.com/panr/9eeea6f595c257febdadc11763e3a6d1).

**NOTE:** Please keep in mind that currently `main menu` doesn't support nesting.

## Post archetype

See the basic `post` file params supported by the theme — https://github.com/panr/hugo-theme-terminal/blob/master/archetypes/posts.md

## Add-ons

- **Comments** — for adding comments to your blog posts please take a look at `layouts/partials/comments.html` https://github.com/panr/hugo-theme-terminal/blob/master/layouts/partials/comments.html.
- **Extended Head** — please take a look at `layouts/partials/extended_head.html` https://github.com/panr/hugo-theme-terminal/blob/master/layouts/partials/extended_head.html
- **Extended Footer** — please take a look at `layouts/partials/extended_footer.html` https://github.com/panr/hugo-theme-terminal/blob/master/layouts/partials/extended_footer.html

## How to run your site

From your Hugo root directory run:

```
$ hugo server -t terminal
```

and go to `localhost:1313` in your browser. From now on all the changes you make will go live, so you don't need to refresh your browser every single time.

## How to edit the theme

If you have to override some of the styles, **you can do this easily** by adding `static/style.css` in your root directory and point things you want to change.

Otherwise, if you really want to edit the theme, you need to install Node dependencies. To do so, go to the theme directory (from your Hugo root directory):

```
$ cd themes/terminal
```

and then run:

```
$ npm install
$ npm i yarn
$ yarn
```

## How to contribute

If you spot any bugs, please use [Issue Tracker](https://github.com/panr/hugo-theme-terminal/issues) or if you want to add a new feature directly please create a new [Pull Request](https://github.com/panr/hugo-theme-terminal/pulls).

## Terminal theme user?

I'd be happy to know more about you and what you are doing. If you want to share it, please make a contribution and [add your site to the list](https://github.com/panr/hugo-theme-terminal/blob/master/USERS.md)! 🤗

## Sponsoring

If you like my work and want to support the development of the project, now you can! Just:

<a href="https://www.buymeacoffee.com/panr" target="_blank"><img src="https://res.cloudinary.com/panr/image/upload/v1579374705/buymeacoffee_y6yvov.svg" alt="Buy Me A Coffee" ></a>

## License

Copyright © 2019 Radosław Kozieł ([@panr](https://twitter.com/panr))

The theme is released under the MIT License. Check the [original theme license](https://github.com/panr/hugo-theme-terminal/blob/master/LICENSE.md) for additional licensing information.
