async function synchronizeAllModels(db) {
  await db.sync({ alter: true });
}

export { synchronizeAllModels };
