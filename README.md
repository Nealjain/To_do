# Todo List App

A modern, feature-rich todo list application built with Next.js, TypeScript, Redux Toolkit, and Tailwind CSS.

## 🚀 Features

### Core Features
- ✅ **Add New Tasks** with title (required), description (optional), due date (optional), priority (Low/Medium/High), and status (Pending/In Progress/Completed)
- ✅ **Edit Tasks** in a modal interface with full form validation
- ✅ **Delete Tasks** with confirmation prompt to prevent accidental deletions
- ✅ **Real-time Search** by title or description with instant filtering
- ✅ **Filter by Status** (All, Pending, In Progress, Completed)
- ✅ **Filter by Priority** (All, High, Medium, Low)
- ✅ **Sort by Multiple Fields** (Due Date, Priority, Creation Time) with ascending/descending options
- ✅ **State Management** using Redux Toolkit for predictable state updates
- ✅ **Responsive Design** that works seamlessly on desktop, tablet, and mobile devices
- ✅ **Toast Notifications** for user feedback on all actions

### Bonus Features
- ✅ **Group Tasks by Status** with toggle between list and grouped views
- ✅ **Dark Mode Toggle** with system preference detection and localStorage persistence
- ✅ **Overdue Task Detection** with visual indicators
- ✅ **Modern UI/UX** with smooth transitions and hover effects

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Notifications**: React Hot Toast
- **Deployment**: Vercel-ready

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd todo-list-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🏗️ Project Structure

```
todo-list-app/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── providers.tsx      # Redux provider wrapper
├── components/            # React components
│   ├── TodoApp.tsx        # Main app orchestrator
│   ├── TaskForm.tsx       # Add/edit task form
│   ├── TaskList.tsx       # Task list with grouping
│   ├── TaskItem.tsx       # Individual task display
│   ├── SearchBar.tsx      # Search functionality
│   ├── FilterComponent.tsx # Status/priority filters
│   ├── SortComponent.tsx  # Sorting controls
│   └── DarkModeToggle.tsx # Theme toggle
├── lib/                   # Utilities and configuration
│   ├── store.ts           # Redux store setup
│   ├── hooks.ts           # Typed Redux hooks
│   ├── types.ts           # TypeScript interfaces
│   ├── utils.ts           # Helper functions
│   └── slices/
│       └── tasksSlice.ts  # Redux Toolkit slice
└── public/                # Static assets
```

## 🧠 Thought Process & Architecture Decisions

### 1. **State Management Strategy**
- **Why Redux Toolkit?** Chosen for its simplicity, built-in immutability, and excellent TypeScript support
- **Single Slice Design** All task-related state (tasks, filters, sorting, dark mode) in one slice for simplicity
- **Normalized State** Tasks stored as an array with unique IDs for easy CRUD operations

### 2. **Component Architecture**
- **Single Responsibility** Each component has a clear, focused purpose
- **Composition over Inheritance** Components are composed together rather than inherited
- **Props Interface** Strong TypeScript interfaces for all component props
- **Reusable Components** TaskForm handles both add and edit modes

### 3. **User Experience Design**
- **Progressive Enhancement** Core functionality works without JavaScript
- **Immediate Feedback** Toast notifications for all user actions
- **Confirmation Dialogs** Delete actions require confirmation
- **Responsive Design** Mobile-first approach with breakpoint considerations

### 4. **Performance Optimizations**
- **Memoization** Redux selectors for efficient re-renders
- **Debounced Search** Real-time search without performance impact
- **Lazy Loading** Components loaded only when needed
- **Optimistic Updates** UI updates immediately, then syncs with state

### 5. **Accessibility Considerations**
- **Semantic HTML** Proper heading hierarchy and form labels
- **Keyboard Navigation** All interactive elements are keyboard accessible
- **Screen Reader Support** ARIA labels and descriptions where needed
- **Color Contrast** Dark mode support for better accessibility

### 6. **Data Flow Design**
```
User Action → Component → Redux Action → Reducer → State Update → UI Re-render
```

### 7. **Filtering & Sorting Strategy**
- **Client-side Processing** All filtering/sorting done in Redux for performance
- **Composable Filters** Multiple filters can be applied simultaneously
- **Persistent State** Filter/sort preferences maintained during session

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) for main actions and highlights
- **Success**: Green for completed tasks and positive actions
- **Warning**: Yellow for medium priority and in-progress items
- **Error**: Red for high priority and delete actions
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts) for excellent readability
- **Hierarchy**: Clear heading levels (h1-h3) for content structure
- **Responsive**: Font sizes scale appropriately on different devices

### Spacing & Layout
- **Consistent Spacing** Using Tailwind's spacing scale
- **Grid System** CSS Grid and Flexbox for responsive layouts
- **Card Design** Consistent card components with subtle shadows

## 🚀 Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Environment Variables
No environment variables required for basic functionality.

## 🔧 Customization

### Adding New Features
1. **New Task Properties**: Extend the `Task` interface in `lib/types.ts`
2. **New Filters**: Add to the `FilterState` interface and update the slice
3. **New Components**: Follow the existing component patterns

### Styling Customization
- Modify `tailwind.config.js` for theme customization
- Update `app/globals.css` for custom component styles
- Use CSS custom properties for dynamic theming

## 🧪 Testing Strategy

### Manual Testing Checklist
- [ ] Add new tasks with all field combinations
- [ ] Edit existing tasks
- [ ] Delete tasks with confirmation
- [ ] Search functionality with various terms
- [ ] Filter by status and priority
- [ ] Sort by all available fields
- [ ] Dark mode toggle and persistence
- [ ] Responsive design on different screen sizes
- [ ] Keyboard navigation
- [ ] Screen reader compatibility

## 📈 Future Enhancements

### Potential Features
- **Data Persistence** Local storage or backend integration
- **Task Categories/Tags** More detailed organization
- **Recurring Tasks** Daily, weekly, monthly patterns
- **Task Dependencies** Blocking and blocked by relationships
- **Time Tracking** Pomodoro timer integration
- **Export/Import** CSV, JSON data formats
- **Collaboration** Shared task lists
- **Notifications** Browser notifications for due dates

### Performance Improvements
- **Virtual Scrolling** For large task lists
- **Service Worker** Offline functionality
- **IndexedDB** Local database for better performance
- **Lazy Loading** Component code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for learning or commercial purposes.

---

Built with ❤️ using Next.js, TypeScript, and Redux Toolkit 