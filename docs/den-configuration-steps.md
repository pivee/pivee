# DEN Configuration Steps

## 1. Install OS

My preferred OS for development is Ubuntu.

## 2. Install Git

Use the following command to install Git on Ubuntu.

```sh
sudo apt install git
```

### Create Git Configuration

```sh
git config --global user.name "Pivithuru Jayakody"
```

```sh
git config --global user.email "pivithurujayakody@gmail.com"
```

## 3. Install VS Code and DBeaver

These can be installed using **Ubuntu Software**.

## 4. Install Chrome Browser

1. Download the `.deb` package from Google Chrome website
2. Open it with **Software Install**

## 5. Login to Google Chrome

## 6. Configure GitHub with the SSH Key

### 1. Generate SSH Key

```sh
ssh-keygen -t ed25519 -C "pivithurujayakody@gmail.com"
```

### 2. Add the SSH Key to the SSH Agent

#### 1. Start the SSH Agent 

```sh
eval "$(ssh-agent -s)"
```

#### 2. Add the SSH private key to the SSH Agent

```sh
ssh-add ~/.ssh/id_ed25519
```
If this throws an error regarding permissions, use the following commands to set permissions on the private key file.

```sh
chmod 600 ~/.ssh/id_ed25519
```

### 3. Add the SSH Key to the GitHub Account

```sh
code ~/.ssh/id_ed25519.pub
```

## 7. Login to Communication Channels

Login to the different communication channels used with teams.

_e.g. Microsoft Teams, Slack, Discord_

## 8. Configure the Terminal

### 1. Installing `zsh`

```sh
sudo apt install zsh
```

### 2. Setting `zsh` as the default shell

```sh
chsh -s $(which zsh) 
```

### 3. Install `Oh-My-Zsh`

```sh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```
### 4. Install `zsh-autosuggestions`

```
git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
```

### 5. Install `zsh-syntax-highlighting`

```sh
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

### 6. Enable the installed plugins and change the theme

- Open `~/.zshrc` using a text editor.

```sh
vim ~/.zshrc
```

- Add/Change the following parameters.

```sh
ZSH_THEME="ys"
```

```sh
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

## **7. (Optional) Install Powerlevel10k Theme**

Powerlevel10k is a feature-rich Zsh theme.

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/themes/powerlevel10k
```

Edit `.zshrc`:

```bash
vi ~/.zshrc
```

Change the theme:

```bash
ZSH_THEME="powerlevel10k/powerlevel10k"
```

Save and apply:

```bash
source ~/.zshrc
```

Run the configuration wizard:

```bash
p10k configure
```

## 8. Install Node using NVM

### 1. Installing NVM

```sh
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
```

```sh
source ~/.nvm/nvm.sh
```

### 2. Installing Node

#### Installing the latest version

```sh
nvm install node
```

#### Installing a specific version

##### List available Node versions

```sh
nvm ls-remote
```

#### Installing a specific version

```sh
nvm install 18
```

#### Adding `nvm` to `zsh`

```sh
echo 'export NVM_DIR=~/.nvm' >> ~/.zshrc
echo '[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"' >> ~/.zshrc
source ~/.zshrc
```

