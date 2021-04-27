
export const createView = view => (
    $.ajax({
        method: 'POST',
        url: 'api/views',
        data: {view}
    })
)

export const addView = view => (
    $.ajax({
        method: 'PATCH',
        url: `api/views/1`,
        data: {view}
    })
)