#!/bin/sh
set -e

# the theme repository name
if [ -z $REPO ]; then REPO="jiusanzhou/zoe-starter-react-app"; fi

REPO_REMOTE="https://github.com/$REPO.git";

# cmd to run: init, list
if [ -z $CMD ]; then CMD="init"; fi

function init_project() {
    # use which branch to as start
    if [ -z $TMPL ]; then TMPL="ui/chakra-v1"; fi
    # add prefix ui/
    if [[ "$TMPL" != ui/* ]]; then TMPL="ui/$TMPL"; fi

    # check if branch exits
    if [ -z "$(git ls-remote --heads $REPO_REMOTE $TMPL)" ]; then
        echo "Template $TMPL not found\n";
        list_theme;
        exit 1;
    fi

    # name of the project to create
    if [ -z $NAME ]; then NAME="web"; fi
    if [ -d $NAME ]; then
        echo "Directory $NAME already exists"
        exit 1;
    fi

    echo "Creating project with template $TMPL: $NAME";

    git clone --quiet --branch=$TMPL $REPO_REMOTE $NAME > /dev/null

    # clean the git information
    cd $NAME && rm -rf .git; cd ..;

    echo "✨ Done!"
}

# theme must start with ui/

function list_theme() {
    echo "Listing themes of $REPO:\n";
    git ls-remote $REPO_REMOTE | grep "heads/ui" | awk -F 'heads\/ui\/' '{print $2}'

    echo "\nYou can set template with TMPL=XXX"
}

case $CMD in
    "init")
        init_project;
        ;;
    "list")
        list_theme;
        ;;
    *)
        echo "Unknown command: $CMD";
        ;;
esac