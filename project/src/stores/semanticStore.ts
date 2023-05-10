import { defineStore } from 'pinia'

const defaultValue = `
  {
    "data"  : []
  }
`

export const semanticStore = defineStore('semanticState',{
	state: () => { 
		return {
			semanticContent: defaultValue 
		}
	},
	getters: {
		monacoProvider: (state) => {
			return JSON.parse(state.semanticContent)
		},
	},
	actions:{
		updateContent(updateContent: string) {
			this.semanticContent = updateContent;
		}
	}
})