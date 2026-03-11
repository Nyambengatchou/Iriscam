# 🌿 IrisVision — Analyse Iridologique IA

Application d'analyse iridologique par intelligence artificielle avec recommandations nutritionnelles africaines.

## ✨ Fonctionnalités

- 📸 **Capture d'iris** — Photo via caméra ou import d'image
- 🤖 **Analyse IA** — Détection de déséquilibres par Claude (Anthropic)
- 🥗 **Nutrition africaine** — Aliments traditionnels conseillés et déconseillés
- 🌿 **Compléments naturels** — Plantes médicinales africaines
- 📊 **Historique** — Suivi de toutes vos analyses
- 🎨 **Design élégant** — Interface émeraude apaisante

## 🚀 Déploiement sur Vercel

### Étape 1 — Préparer le dépôt

```bash
git init
git add .
git commit -m "Initial commit IrisVision"
git remote add origin https://github.com/votre-user/irisvision.git
git push -u origin main
```

### Étape 2 — Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com) et connectez-vous
2. Cliquez **"New Project"** → importez votre dépôt GitHub
3. Vercel détecte automatiquement React (Create React App)
4. Ajoutez la variable d'environnement :
   - `REACT_APP_ANTHROPIC_API_KEY` = votre clé API Anthropic
5. Cliquez **Deploy** 🚀

### Étape 3 — Obtenir une clé API Anthropic

1. Créez un compte sur [console.anthropic.com](https://console.anthropic.com)
2. Allez dans **API Keys** → créez une nouvelle clé
3. Ajoutez-la dans les variables d'environnement Vercel

> **Sans clé API**, l'application fonctionne en **mode démo** avec des données simulées réalistes.

## 💻 Développement local

```bash
npm install
cp .env.example .env
# Editez .env et ajoutez votre clé API

npm start
# Ouvre http://localhost:3000
```

## 📦 Build de production

```bash
npm run build
```

## ⚠️ Avertissement

Cette application est un outil de **bien-être informatif** uniquement. L'iridologie est une pratique alternative non reconnue par la médecine conventionnelle. Ne remplace pas un avis médical professionnel.

---

Développé avec ❤️ et 🌿 | Propulsé par Claude (Anthropic)
