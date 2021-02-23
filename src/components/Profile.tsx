import styles from '../styles/components/Profile.module.css';
export function Profile(Usuario){
  return(
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/42758900?s=460&u=ece2f053af9bb49ef75bfbc86f384bd45a81e84f&v=4" alt="DiegoVespa"/>
      <div>
        <strong>Diego Vespa</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}