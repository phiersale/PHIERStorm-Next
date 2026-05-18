type DistrictLookupResult = {
  district: string
  stateCode?: string
  districtNumber?: string
  representative?: string
}

function formatDistrict(stateCode?: string, districtNumber?: string) {
  if (!stateCode || !districtNumber) return ''
  const normalizedDistrict = districtNumber.toString().padStart(2, '0')
  return `${stateCode.toUpperCase()}-${normalizedDistrict}`
}

export async function lookupDistrictByZip(zipCodeRaw: string): Promise<DistrictLookupResult> {
  const zipCode = String(zipCodeRaw ?? '').trim().slice(0, 5)
  if (!/^\d{5}$/.test(zipCode)) {
    return { district: '' }
  }

  const geocodioKey = process.env.GEOCODIO_API_KEY || 'DEMO'
  const geocodioUrl = `https://api.geocod.io/v1.7/geocode?q=${encodeURIComponent(zipCode)}&fields=cd&api_key=${encodeURIComponent(geocodioKey)}`

  try {
    const response = await fetch(geocodioUrl, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    })

    if (!response.ok) {
      return { district: '' }
    }

    const payload = await response.json().catch(() => null)
    const districtCandidate = payload?.results?.[0]?.fields?.congressional_districts?.[0]

    const stateCode = districtCandidate?.ocd_id?.match(/state:([a-z]{2})/i)?.[1]?.toUpperCase()
      || payload?.results?.[0]?.address_components?.state
      || ''

    const districtNumberRaw = districtCandidate?.district_number
    const districtNumber = districtNumberRaw === 0 ? '00' : String(districtNumberRaw ?? '')

    const district = formatDistrict(stateCode, districtNumber)

    const representative = districtCandidate?.current_legislators?.find((l: any) => l?.type === 'representative')
    const representativeName = representative
      ? `${representative?.bio?.first_name ?? ''} ${representative?.bio?.last_name ?? ''}`.trim()
      : ''

    return {
      district,
      stateCode,
      districtNumber,
      representative: representativeName || undefined,
    }
  } catch (error) {
    console.error('District lookup failed:', error)
    return { district: '' }
  }
}
