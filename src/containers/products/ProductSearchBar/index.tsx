import * as React from 'react';
import { Form } from 'react-bootstrap';

interface Props {
	filterText: string;
	filterById: string;
	inStockOnly: boolean;
	onFilterTextChange: (text: string) => void;
	onFilterIdTextChange: (text: string) => void;
	onInStockChange: (inStock: boolean) => void;
}

const ProductSearchBar: React.FC<Props> = (props: Props) => {
	const {
		filterText, inStockOnly, filterById, onFilterTextChange, onFilterIdTextChange, onInStockChange
	} = props;

	
	function handleFilterTextChange(e: React.ChangeEvent<HTMLInputElement>) {
		onFilterTextChange(e.target.value.toString());
	}

	function handleFilterIdTextChange(e: React.ChangeEvent<HTMLInputElement>) {
		onFilterIdTextChange(e.target.value.toString());
	}

	function handleInStockChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value: boolean = e.target.checked as any as boolean;
		onInStockChange(value);
	}
	return (
		<Form>
			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Search..."
					value={filterText}
					onChange={handleFilterTextChange}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Control
					type="text"
					placeholder="Id..."
					value={filterById}
					onChange={handleFilterIdTextChange}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Check
					label="Only show products in stock"
					checked={inStockOnly}
					onChange={handleInStockChange}
				/>
			</Form.Group>
		</Form>
	);
};

export default ProductSearchBar;
