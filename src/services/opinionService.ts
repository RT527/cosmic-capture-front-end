// services
import * as tokenService from './tokenService'

// types
import { Profile } from '../types/models'
import { OpinionManagerFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/opinions`

async function castOpinion(formData: OpinionManagerFormData): Promise<Profile> {
  const res = await fetch(BASE_URL, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
  })
  return await res.json() as Profile
}

export { castOpinion }