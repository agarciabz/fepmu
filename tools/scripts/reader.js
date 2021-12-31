const fs = require('fs');
const csv = require('csv-parser');

const dataToCharacter = (data) => ({
  name: data.ID,
  defaultClass: '',
  gender: data.Gender === 'M' ? 'male' : 'female',
  faction: data.Faction,
  proficiencies: {
    armorProficiency: data.ArmorProficiency,
    authorityProficiency: data.AuthorityProficiency,
    axeProficiency: data.AxeProficiency,
    bowProficiency: data.BowProficiency,
    brawlingProficiency: data.BrawlingProficiency,
    faithProficiency: data.FaithProficiency,
    flyingProficiency: data.FlyingProficiency,
    lanceProficiency: data.LanceProficiency,
    reasonProficiency: data.ReasonProficiency,
    ridingProficiency: data.RidingProficiency,
    swordProficiency: data.SwordProficiency,
  },
});

const read1 = () => {
  const results = [];
  fs.createReadStream('fe3hdb.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      //console.log(results);
      fs.writeFile('output', JSON.stringify(results), (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    });
};

const read2 = () => {
  const initial = data;
  const refined = dataToCharacter(initial);
  fs.writeFile('refined.ts', JSON.stringify(refined), (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

const read3 = () => {
  const results = [];
  fs.createReadStream('fe3hdb.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      const refined = results.map(dataToCharacter);
      fs.writeFile('refined', JSON.stringify(refined), (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
    });
};

const main = async () => {
  // read1();
  // read2();
  read3();
};

main().then();
