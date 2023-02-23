import { create } from 'zustand'
import { ApplyState, BoothState } from '../state/initialState'
import { EditApply, EditBooth } from '../types/types'

type State = {
  // Apply - 申し込み
  editedApply: EditApply
  updatedApply: (payload: EditApply) => void
  resetEditedApply: () => void
  // Booth - ブース
  editedBooth: EditBooth
  updatedBooth: (paylod: EditBooth) => void
  resetEditedBooth: () => void
}

const useStore = create<State>((set) => ({
  // Login
  // Booths
  // Apply - 申し込み
  editedApply: ApplyState,
  updatedApply: (payload) =>
    set({
      editedApply: {
        id: payload.id,
        uuid: payload.uuid,
        booth: payload.booth,
        date: payload.date,
        time: payload.time,
        name: payload.name,
        url: payload.url,
        contents: payload.contents,
        status: payload.status,
        updated_at: payload.updated_at,
      },
    }),
  resetEditedApply: () => {
    set({
      editedApply: ApplyState,
    })
  },
  // Admin
  // Settings
  // Booth - ブース
  editedBooth: BoothState,
  updatedBooth: (payload) => {
    set({
      editedBooth: {
        id: payload.id,
        name: payload.name,
        location: payload.location,
        questionary: payload.questionary,
        status: payload.status,
        updated_at: payload.updated_at,
      },
    })
  },
  resetEditedBooth: () => {
    set({
      editedBooth: BoothState,
    })
  },
}))

export default useStore
