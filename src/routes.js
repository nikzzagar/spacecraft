import App from './App'
import LaunchSystem from './components/LaunchSystem'

export default [
  {
    ...App,
    routes: [
      {
        ...LaunchSystem,
        path: '/',
        exact: true
      }
    ]
  }
]