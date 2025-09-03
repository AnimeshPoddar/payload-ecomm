// "use client"

// // components/CustomListView.tsx
// import React from 'react'
// import { ListViewServerProps } from 'payload'
// import { useListQuery, useAuth, useConfig } from '@payloadcms/ui'
// import { Table, Pagination, Button } from '@payloadcms/ui'
// // import { useHistory } from 'react-router-dom';

// export default function CustomListView(props: ListViewServerProps) {
//   //   const { collection } = props
// //   const { user } = useAuth()
//   //   const { routes } = useConfig();
//   //   const history = useHistory();

//   const { data, defaultLimit } = useListQuery()

//   //   if (isLoading) {
//   //     return <div>Loading...</div>
//   //   }

//   return (
//     <div>
//       <div style={{ marginBottom: '20px' }}>
//         <Button
//         //   onClick={() => history.push(`${routes.admin}/collections/${collection.slug}/create`)}
//         >
//           Create New
//         </Button>
//       </div>

//       <Table
//         data={data?.docs || []}
//         // columns={[
//         //   {
//         //     Header: 'Title',
//         //     accessor: 'title',
//         //   },
//         //   {
//         //     Header: 'Status',
//         //     accessor: 'status',
//         //     Cell: ({ value }) => (
//         //       <span
//         //         style={{
//         //           color: value === 'published' ? 'green' : 'orange',
//         //         }}
//         //       >
//         //         {value}
//         //       </span>
//         //     ),
//         //   },
//         //   {
//         //     Header: 'Actions',
//         //     accessor: 'id',
//         //     Cell: ({ value }) => (
//         //       <div>
//         //         <Button
//         //           size="small"
//         //           onClick={() =>
//         //             history.push(`${routes.admin}/collections/${collection.slug}/${value}`)
//         //           }
//         //         >
//         //           Edit
//         //         </Button>
//         //       </div>
//         //     ),
//         //   },
//         // ]}
//       />

//       {/* {totalPages > 1 && <Pagination page={page} totalPages={totalPages} limit={limit} />} */}
//     </div>
//   )
// }

'use client'
// // components/CustomListView.tsx
import React from 'react'
import { ListViewServerProps } from 'payload'
import { useListQuery, useAuth, useConfig } from '@payloadcms/ui'
import { Table, Pagination, Button } from '@payloadcms/ui'
// import { useHistory } from 'react-router-dom';

export default function CustomListViewClient() {
  const { user } = useAuth()
  //   const { routes } = useConfig();
  //   const history = useHistory();

  const { data, defaultLimit } = useListQuery()

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <Button
        //   onClick={() => history.push(`${routes.admin}/collections/${collection.slug}/create`)}
        >
          Create New
        </Button>
      </div>

      <Table
        data={data?.docs || []}
        // columns={[
        //   {
        //     Header: 'Title',
        //     accessor: 'title',
        //   },
        //   {
        //     Header: 'Status',
        //     accessor: 'status',
        //     Cell: ({ value }) => (
        //       <span style={{
        //         color: value === 'published' ? 'green' : 'orange'
        //       }}>
        //         {value}
        //       </span>
        //     ),
        //   },
        //   {
        //     Header: 'Actions',
        //     accessor: 'id',
        //     Cell: ({ value }) => (
        //       <div>
        //         <Button
        //           size="small"
        //           onClick={() => history.push(`${routes.admin}/collections/${collection.slug}/${value}`)}
        //         >
        //           Edit
        //         </Button>
        //       </div>
        //     ),
        //   },
        // ]}
      />

      {/* {totalPages > 1 && (
        <Pagination
          page={page}
          totalPages={totalPages}
          limit={limit}
        />
      )} */}
    </div>
  )
}
