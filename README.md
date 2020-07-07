# LearnHPC

This is a website to gather material and tools to help learners to navigate learning about HPC systems

## Building the page

This tutorial is rendered via [MkDocs](https://www.mkdocs.org/),
which makes it very easy to preview the result of the changes you make locally.

* First, install ``mkdocs``, including the `material` theme and additional plugins:

      pip install mkdocs mkdocs-material mkdocs-git-revision-date-localized-plugin

* Start the MkDocs built-in dev-server to preview the tutorial as you work on it:

      make preview

  or

      mkdocs serve

  Visit http://127.0.0.1:8000 to see the local live preview of the changes you make.

* If you prefer building a static preview you can use ``make`` or ``mkdocs build``,
  which should result in a ``site/`` subdirectory that contains the rendered documentation.

## Automatic updates

The rendered version of this page at https://www.learnhpc.eu
is automatically updated on every push to the ``master`` branch,
thanks to the GitHub Actions workflow defined in
[``.github/workflows/deploy.yml``](https://github.com/HPCinEurope/learnhpc/blob/master/.github/workflows/deploy.yml).

The [``gh-pages``](https://github.com/HPCinEurope/learnhpc/tree/gh-pages) branch in this repository contains the rendered version.

https://www.learnhpc.eu will only be updated if the tests pass,
see GitHub Actions workflow defined in
[``.github.workflows/test.yml``](https://github.com/HPCinEurope/learnhpc/blob/master/.github/workflows/test.yml).

**Note**: **do *not* change the files in the ``gh-pages`` branch directly!**

All your changes will be lost the next time the ``master`` branch is updated...
