import firebase from 'firebase'

export default (context) => {
    if (!firebase.auth().currentUser) {
        context.redirect('/login')
    }
}

