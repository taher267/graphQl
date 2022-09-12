import { useQuery } from '@apollo/client';
import { CATEGORIES_QRY, PRODUCTS_QRY } from '../graphql/Query/product';
import { LinearProgress, Box } from '@mui/material';
export default function Products() {
  //   const { loading, data, error } = useQuery(PRODUCTS_QRY, {
  //     variables: {
  //       page: 2,
  //       limit: 1,
  //     },
  //   });
  //   const { loading, data, error } = useQuery(CATEGORIES_QRY);
  //   console.log(data);
  const data = {
    description:
      "<p><strong>★Code:</strong> C623<br />\n<strong>*Fabric:</strong>- Indian Arvind Cotton<br />\n<strong>*Collar/Neck:-</strong> Sherwani Collar<br />\n<strong>*Length:-</strong> Semi-Long<br />\n<strong>*Fit:-</strong> Regular Fit<br />\n<strong>*Occasion:-</strong> Any Festival<br />\n*<strong>Care:-</strong> Hand wash with<br />\nmild detergent</p>\n<p>★<strong>Disclaimer:-</strong> Product color may slightly vary due to photography, lighting sources, or your monitor setting.</p>\n<p><strong>Delivery Period:</strong><br />\n48 hour's (Inside Dhaka),<br />\n72 hour's (Outside Dhaka)</p>\n<p><strong>★Note:</strong> In case of return courier charges will be applicable.</p>\n",
  };

  return (
    <>
      <div>{data.description}</div>
      {/* {loading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )} */}
    </>
  );
}
