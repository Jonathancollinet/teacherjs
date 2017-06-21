#!/bin/bash

# install java osx/linux
if [ "$(uname)" == "Darwin" ]; then

    if ! loc="$(type -p java)" || [ -z "$loc" ]; then
        echo -n "Require java to correct java exercices, install java ? (y/n)? "
        read answer
        if echo "$answer" | grep -iq "^y" ;then
            brew update
            brew cask install java
        fi
    fi
else
    if ! loc="$(type -p java)" || [ -z "$loc" ]; then
        echo -n "Require java to correct java exercices, install java ? (y/n)? "
        read answer
        if echo "$answer" | grep -iq "^y" ;then
            sudo apt-get install default-jdk
        fi
    fi
fi

# install nodeJS
if ! loc="$(type -p node)" || [ -z "$loc" ]; then
    echo "Install node because uninstalled on current os and required by script."
    curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
fi

# install mocha
if ! loc="$(type -p mocha)" || [ -z "$loc" ]; then
    echo -n "Require mocha to correct javascript exercices, install mocha ? (y/n)? "
    read answer
    if echo "$answer" | grep -iq "^y" ;then
        sudo npm i -g mocha
    fi
fi

# install php
if ! loc="$(type -p php)" || [ -z "$loc" ]; then
    echo -n "Require php to correct php exercices, install php ? (y/n)? "
    read answer
    if echo "$answer" | grep -iq "^y" ;then
        curl -s https://php-osx.liip.ch/install.sh | bash -s 7.0
    fi
fi

# install phpunit
if ! loc="$(type -p phpunit)" || [ -z "$loc" ]; then
    echo -n "Require phpunit to correct php exercices, install phpunit ? (y/n)? "
    read answer
    if echo "$answer" | grep -iq "^y" ;then
        curl https://phar.phpunit.de/phpunit.phar -L -o phpunit.phar
        chmod +x phpunit.phar
        sudo mv phpunit.phar /usr/local/bin/phpunit
    fi
fi

npm i