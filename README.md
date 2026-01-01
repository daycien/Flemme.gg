# 🚀 Flemme.gg

![Windows](https://img.shields.io/badge/OS-Windows-0078D6?logo=windows\&logoColor=white)
![PowerShell](https://img.shields.io/badge/Made%20with-PowerShell-5391FE?logo=powershell\&logoColor=white)
![GLPI](https://img.shields.io/badge/GLPI-Compatible-4CAF50)
![Status](https://img.shields.io/badge/Status-En%20développement-orange)
![License](https://img.shields.io/badge/License-Interne-lightgrey)

---

## 🧠 Description

**Flemme.gg** est un outil d’automatisation destiné aux **informaticiens de Don-Bosco**.
Il permet de simplifier et accélérer les tâches courantes de préparation, maintenance et inventaire des postes Windows.

---

## ✨ Fonctionnalités

✔ Nettoyage du cache DNS
✔ Gestion réseau (release / renew IP)
✔ Activation de Windows *(licence valide requise)*
✔ Activation de Microsoft Office *(licence valide requise)*
✔ Installation automatique de Microsoft Office
✔ Installation de l’agent GLPI
✔ Injection automatique dans GLPI
✔ Accès rapide à la page GLPI

---

## 🖥️ Aperçu (captures d’écran)



### Interface principale

![Interface principale](screenshots/main.png)

### Menu des outils réseau

![Outils réseau](screenshots/network.png)

### GLPI & inventaire

![GLPI](screenshots/glpi.png)

---

## 🛠️ Détails techniques

### 🔹 DiskPart

Outil en ligne de commande Windows pour la gestion des disques.

Fonctions :

* Création / suppression de partitions
* Formatage de disques
* Préparation avant installation Windows

👉 Utilisé pour le déploiement et la maintenance.

---

### 🔹 GLPI Injector

Permet l’envoi automatique des informations du poste vers GLPI.

Fonctions :

* Inventaire automatique
* Mise à jour du matériel et des logiciels
* Centralisation des données du parc

---

### 🔹 Activation Windows & Office

Permet :

* L’activation de Windows
* L’activation de Microsoft Office

⚠️ **Uniquement avec des licences valides ou un serveur KMS autorisé**

---

### 🔹 Commandes réseau

* `ipconfig /flushdns`
  → Vide le cache DNS (dépannage réseau)

* `ipconfig /release`
  → Libère l’adresse IP actuelle

* `ipconfig /renew`
  → Récupère une nouvelle adresse IP

---

### 🔹 Installation Microsoft Office

* Installation automatique
* Sans intervention utilisateur

👉 Gain de temps lors de la préparation des postes.

---

### 🔹 Installation Agent GLPI

* Installation de l’agent GLPI
* Remontée automatique des données vers le serveur GLPI

---

## 📦 Prérequis

* Windows 10 / 11
* Droits administrateur
* Accès réseau au serveur GLPI
* Licence Windows / Office valide

---

## ⚠️ Avertissement

Ce projet est destiné à un **usage interne**.
Toute utilisation des fonctions d’activation doit respecter la **législation et les licences en vigueur**.

---

## 👨‍💻 Auteur

Projet développé pour les **informaticiens de Don-Bosco**
💡 Objectif : *moins de clics, plus d’efficacité*
