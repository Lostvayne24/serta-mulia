const { Firestore } = require('@google-cloud/firestore');
const projectId = 'serta-mulia-423903';

async function storeData (id, data) {
  const db = new Firestore({
    projectId,
  });

  const predictCollection = db.collection('prediction');
  return predictCollection.doc(id).set(data);
}

module.exports = storeData;