export default function normalizeData (data) {
    if (data.length === 0) {
        return null;
    };

    return data.map((hero)=> {
        return {
            id: hero.id,
            name: hero.name,
            alterEgos: hero.biography.fullName,
            publisher: hero.biography.publisher,
            occupation: hero.work.occupation,
            image: hero.images.md,
            powers: hero.powerstats,
            liked: false
        } 
    });
}