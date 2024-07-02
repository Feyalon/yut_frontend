import Header from "./components/header"
import { createContext, useEffect, useState } from "react"
import HomePage from "./pages/HomePage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./layout/+layout"
import Projects  from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";


export const projectContext = createContext()
function App() {
  const ProjectApi = [
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBpbEWNdxFbp_2xBhEQwpreiquqt7E19Pow&s",
      title: "Validation is not defined",
      username: "Sweetheart",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus necessitatibus ipsam ullam sunt earum voluptates voluptatum, velit aliquam, quaerat est officia aspernatur eos praesentium non dolore incidunt, sed reprehenderit rerum!",
      id: 1
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAKV4Mr56p3Z9U8EcKWm8xLPH_lIa1Gq4JQ&s",
      title: "Test items is not passed why??",
      username: "FeyStack",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus necessitatibus ipsam ullam sunt earum voluptates voluptatum, velit aliquam, quaerat est officia aspernatur eos praesentium non dolore incidunt, sed reprehenderit rerum!",
      id: 2
    },
    {
      image: "https://media.stickerswiki.app/yunogasai_by_shinoarobot/6150924.512.webp",
      title: "My project was updated just now!!",
      username: "Garry",
      content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus necessitatibus ipsam ullam sunt earum voluptates voluptatum, velit aliquam, quaerat est officia aspernatur eos praesentium non dolore incidunt, sed reprehenderit rerum!",
      id: 3
    }
  ]
  const [projectsApi, setProjectsApi ] = useState([])
 

  return (
    <projectContext.Provider value={ProjectApi}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/" element={<ProjectPage />} />
          </Route>
        </Routes>
      </Router>
    </projectContext.Provider>
  )
}

export default App
