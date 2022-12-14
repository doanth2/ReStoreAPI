import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Product } from '../../app/models/product';

interface Props {
    product: Product;
}
export default function ProductCard({ product }: Props) {
    return (
        // <ListItem key={product.id}>
        //     <ListItemAvatar>
        //         <Avatar src={product.pictureUrl} />
        //     </ListItemAvatar>
        //     <ListItemText>
        //         {product.name} - {product.price}
        //     </ListItemText>
        // </ListItem>
        <Card >
            <CardHeader avatar={
                <Avatar sx={{bgcolor:'info.main'}}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            } 
            title={product.name}
            titleTypographyProps={{
                sx:{fontWeight:'bold',color:'success.main'}
            }}
            />
            <CardMedia
                sx={{ height: 140, backgroundSize:'contanier', bgcolor:'primary.dark' }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" color='secondary'>
                  ${(product.price/100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {product.brand}/{product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">add to card</Button>
                <Button component={Link} to={`/catalog/${product.id}`} size='small'>View</Button>
            </CardActions>
        </Card>
    )
}
