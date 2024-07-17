import Image from 'next/image'
import styles from './Blog.module.css'

function BlogCard({thumb, title}) {
  return (
    <div className={styles.blogCardDiv}>
      <Image src={thumb} style={{width: "351px", height: "291px"}} />
      <p>{title}</p>
    </div>
  )
}

export default BlogCard
