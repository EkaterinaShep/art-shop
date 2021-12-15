async function synchronizeAllModels(db) {
  await db.sync({ force: true });
}

export { synchronizeAllModels };
