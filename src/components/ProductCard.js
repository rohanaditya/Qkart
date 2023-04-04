import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box } from "@mui/system";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card" sx={{ maxWidth: "100%" }}>
      <CardMedia component="img" image={product.image} alt="PmInA797xJhMIPti" />
      <CardContent>
        <Typography gutterBottom variant="h6">
        {product.name}
        </Typography>
        <Typography gutterBottom fontWeight="bold">
        {"$"+product.cost}
        </Typography>
        <Rating value={product.rating} readOnly />
      </CardContent>
      <CardActions className="card-actions">
        <Button
          variant="contained"
          startIcon={<AddShoppingCartOutlined />}
          className="card-button"
          fullWidth
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
