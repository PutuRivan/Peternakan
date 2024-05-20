import React from 'react'
import { Navigation } from '../components/Navigation'

const Status = () => {
  return (
    <>
        <Navigation/>
        <div className='flex justify-center items-center h-[90vh] w-full'>
            <div className='flex justify-center items-center'>
                <table>
                    <tr>
                        <th>NAMA HEWAN</th>
                        <th>VAKSIN</th>
                        <th>SUDAH VAKSIN</th>
                        <th>BELUM VAKSIN</th>
                    </tr>
                    <tr>
                        <td>AYAM</td>
                        <td>NAMA VAKSIN</td>
                        <td>5050</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>AYAM</td>
                        <td>NAMA VAKSIN</td>
                        <td>5050</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>AYAM</td>
                        <td>NAMA VAKSIN</td>
                        <td>5050</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>AYAM</td>
                        <td>NAMA VAKSIN</td>
                        <td>5050</td>
                        <td>200</td>
                    </tr>
                </table>
            </div>  
        </div>
    </>
  )
}

export default Status