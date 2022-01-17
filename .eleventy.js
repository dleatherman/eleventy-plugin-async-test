async function anotherFunction() {
  console.log('anotherFunction', true)
  return true
}

async function testContent() {
  const test = await anotherFunction()
  console.log('testContent', test)
  return test
}

module.exports = (eleventyConfig) => {

  eleventyConfig.addGlobalData(
    "test",
    async () => await testContent()
  )

};
