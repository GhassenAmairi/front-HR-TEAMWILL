export const state = ()  => ({
    id: 0,
    title: '',
    degree: {
      level: 'associate',
      major: '',
    },
    description: '',
    skills: [''],
    lang: ['english'],
  });
  
  export const mutations = {
    storeId: (state: { id: number }, data: number) => {
      state.id = data;
    },
    storeTitle: (state: { title: string }, data: string) => {
      state.title = data;
    },
    storeDegree: (state: { degree: { level: string; major: string } }, data: { level: string; major: string }) => {
      state.degree = data;
    },
    storeDescription: (state: { description: string }, data: string) => {
      state.description = data;
    },
    storeSkills: (state: { skills: string[] }, data: string[]) => {
      state.skills = data;
    },
    storeLang: (state: { lang: string[] }, data: string[]) => {
      state.lang = data;
    },
  };