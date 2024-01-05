 import {motion} from 'framer-motion'
 export default function Badge({ caption }) {
  return <motion.div animate={{scale:[1,1.8,1]}} transition={{duration:0.3}} className="badge">{caption}</motion.div>;
}
