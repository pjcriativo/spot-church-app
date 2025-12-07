# Prompt Base SpotChurch UI

## 🎯 Diretrizes Obrigatórias de Design

Este documento define as regras **imutáveis** para desenvolvimento de UI no projeto SpotChurch.

---

## 🎨 Design System Fixo

### Paleta de Cores (IMUTÁVEL)
```
primary:    #DEBDFF  (Roxo claro)
secondary:  #E1FFBA  (Verde claro)
text:       #FFFFFF  (Branco)
background: #000000  (Preto)
surface:    #111111  (Superfícies elevadas)
overlay:    rgba(255,255,255,0.05)
```

### Tipografia (IMUTÁVEL)
```
fontPrimary: "DM Sans", sans-serif
fontAccent:  "Gayathri", sans-serif
```

### Style System (IMUTÁVEL)
```
radius:
  sm: 6px
  md: 10px
  lg: 16px

spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px

shadow:
  soft: 0px 0px 10px rgba(222,189,255,0.25)
  glow: 0px 0px 15px rgba(222,189,255,0.35)
```

---

## 🧱 Componentes Reutilizáveis

### Button
**Localização:** `src/components/ui/Button.tsx`

**Variantes:**
- `primary`: Fundo roxo (#DEBDFF) + texto preto
- `ghost`: Borda roxo + fundo transparente
- `subtle`: Fundo overlay + hover glow

**Props:**
- `variant`: 'primary' | 'ghost' | 'subtle'
- `uppercase`: boolean (opcional)

**Uso:**
```tsx
import Button from '@/components/ui/Button'

<Button variant="primary">Salvar</Button>
<Button variant="ghost">Cancelar</Button>
<Button variant="subtle" uppercase>Ver mais</Button>
```

---

### Card
**Localização:** `src/components/ui/Card.tsx`

**Características:**
- Background: surface (#111111)
- Border radius: lg (16px)
- Shadow: soft
- Imagem topo 100% (aspect-ratio 1:1)
- Hover: Scale 1.03 + glow

**Props:**
- `image`: string (URL da imagem)
- `title`: string
- `subtitle`: string (opcional)
- `onClick`: function (opcional)

**Uso:**
```tsx
import Card from '@/components/ui/Card'

<Card 
  image="https://example.com/image.jpg"
  title="Indie Pop"
  subtitle="Playlist"
  onClick={() => navigate('/playlist/1')}
/>
```

---

### InputSearch
**Localização:** `src/components/ui/InputSearch.tsx`

**Características:**
- Background: #111111
- Border: 1px solid overlay
- Ícone de busca embutido (lado esquerdo)
- Focus: Border primary + shadow glow
- Placeholder padrão: "Buscar..."

**Props:**
- `placeholder`: string (opcional)
- Todas as props de HTMLInputElement

**Uso:**
```tsx
import InputSearch from '@/components/ui/InputSearch'

<InputSearch 
  placeholder="Buscar músicas, artistas..."
  value={query}
  onChange={(e) => setQuery(e.target.value)}
/>
```

---

## ⚠️ Regras Proibidas

### 🚫 NÃO PERMITIDO:

1. **Alterar cores** sem autorização explícita
2. **Mudar fontes** (DM Sans e Gayathri são fixas)
3. **Modificar radius, spacing ou shadows** do theme
4. **Criar novas variantes** de componentes sem aprovação
5. **Usar cores que não estejam no tema**
6. **Aplicar bordas padrão** em componentes globais
7. **Criar temas alternativos** (apenas dark theme)

### ✅ SEMPRE FAZER:

1. **Reutilizar componentes** existentes (Button, Card, InputSearch)
2. **Seguir Mobile-first** → adaptar para Desktop depois
3. **Usar theme.ts** para todas as referências de estilo
4. **Aplicar styled-components** para estilização
5. **Manter consistência visual** em todas as telas
6. **Usar apenas cores do theme** definido

---

## 📱 Abordagem Mobile-First

### Breakpoints (do theme.ts)
```
mobile:  320px
tablet:  768px
desktop: 1024px
wide:    1440px
```

### Ordem de Desenvolvimento
1. **Mobile** (320px - 767px) → Layout base
2. **Tablet** (768px - 1023px) → Ajustes de grid
3. **Desktop** (1024px+) → Layout expandido
4. **Wide** (1440px+) → Otimizações extras

### Exemplo de Media Queries
```tsx
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr; // Mobile

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr); // Tablet
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr); // Desktop
  }
`
```

---

## 🎨 Padrões de UI

### Hover Effects
- **Cards**: `transform: scale(1.03)` + `shadow.glow`
- **Buttons**: `shadow.glow` + elevação leve
- **Inputs**: Border `primary` + `shadow.glow`

### Transitions
- **Fast**: 150ms (hover states simples)
- **Normal**: 300ms (transformações, shadows)
- **Slow**: 500ms (animações complexas)

### Shadows
- **soft**: Sombra sutil para cards em repouso
- **glow**: Efeito glow roxo para hover/focus

---

## 📂 Estrutura de Arquivos

### Componentes UI
```
src/components/ui/
  ├── Button.tsx
  ├── Button.styles.ts
  ├── Card.tsx
  ├── Card.styles.ts
  ├── InputSearch.tsx
  └── InputSearch.styles.ts
```

### Theme
```
src/theme/
  ├── theme.ts          (Definições do tema)
  └── GlobalStyles.ts   (Estilos globais)
```

### Páginas
```
src/pages/
  ├── Home.tsx
  ├── Search.tsx
  ├── Library.tsx
  ├── Profile.tsx
  ├── Playlist.tsx
  └── NowPlaying.tsx
```

---

## 🔄 Workflow de Desenvolvimento

### Ao criar nova tela:

1. **Verificar componentes existentes** (Button, Card, InputSearch)
2. **Reutilizar ao máximo** antes de criar novos componentes
3. **Seguir Mobile-first** no layout
4. **Usar theme.ts** para todas as propriedades de estilo
5. **Aplicar hover effects** conforme padrões definidos
6. **Testar responsividade** em todos os breakpoints

### Ao criar novo componente:

1. **Verificar se já existe** componente similar
2. **Solicitar aprovação** para novas variantes
3. **Seguir estrutura** Component.tsx + Component.styles.ts
4. **Usar theme** para cores, spacing, radius, shadows
5. **Documentar props** com TypeScript
6. **Adicionar ao Prompt Base** se for reutilizável

---

## 📝 Checklist de Qualidade

Antes de finalizar qualquer componente/tela:

- [ ] Usa apenas cores do theme
- [ ] Fontes DM Sans e Gayathri aplicadas
- [ ] Radius, spacing e shadows do theme
- [ ] Mobile-first implementado
- [ ] Hover effects aplicados
- [ ] Transitions suaves
- [ ] TypeScript props definidas
- [ ] Componentes reutilizáveis usados
- [ ] Sem bordas padrão indesejadas
- [ ] Testado em múltiplos breakpoints

---

## 🎯 Objetivo Final

Manter **consistência visual absoluta** em todo o aplicativo, garantindo que:

- Todas as telas sigam o mesmo design system
- Componentes sejam reutilizáveis e escaláveis
- Código seja limpo e manutenível
- Experiência do usuário seja fluida e premium
- Design seja moderno, minimalista e elegante

---

**Última atualização:** 2025-12-07
**Versão:** 1.0
**Status:** Ativo e Obrigatório
